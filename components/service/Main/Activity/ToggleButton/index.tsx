import {
  FormEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import oauth2Axios from '@lib/axios';
import useToken from '@hooks/useToken';
import * as S from './styles';

export type Method =
  | 'get'
  | 'delete'
  | 'head'
  | 'options'
  | 'post'
  | 'put'
  | 'patch';

type Props = {
  api: {
    on: {
      url: string;
      method: Method;
    };
    off: {
      url: string;
      method: Method;
    };
    stateDetermination: {
      url: string;
      method: Method;
    };
  };
  word: {
    on: string;
    off: string;
  };
  Icon?: {
    on: JSX.Element;
    off: JSX.Element;
  };
  target?: string;
};

const ToggleButton = observer<Props>(({ api, word, Icon, target }) => {
  const accessToken = useToken();
  const [clickedButton, setClickedButton] = useState<boolean>(false);
  const [stateDeterminationDone, setStateDeterminationDone] =
    useState<boolean>(false);
  const debounceRef = useRef<NodeJS.Timer | null>(null);
  const cachedClickedState = useRef<boolean>(clickedButton);

  const action = useMemo(
    () => (clickedButton ? api.off.url : api.on.url),
    [api.off.url, api.on.url, clickedButton],
  );
  const method = useMemo(
    () => (clickedButton ? api.off.method : api.on.method),
    [api.off.method, api.on.method, clickedButton],
  );

  const request = useCallback(async () => {
    try {
      await oauth2Axios[method](action);
    } catch (err) {
      /* */
    }
  }, [action, method]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      e.currentTarget.querySelector('button')?.blur();

      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
      debounceRef.current = setTimeout(async () => {
        const willChangeButtonState = !clickedButton;
        if (cachedClickedState.current === willChangeButtonState) {
          console.log('같아서 요청 발생 안함', {
            cachedClickedState: cachedClickedState.current,
            clickedButton,
          });
          return;
        }
        cachedClickedState.current = willChangeButtonState;
        await request();
      }, 2000);

      setClickedButton((prev) => !prev);
    },
    [clickedButton, request],
  );

  useEffect(() => {
    if (stateDeterminationDone) return;
    (async () => {
      try {
        const { url, method } = api.stateDetermination;
        await axios[method](url, {
          headers: {
            accept: 'application/vnd.github.v3+json',
            Authorization: `token ${accessToken}`,
          },
        });
        setClickedButton(true);
      } catch (err) {
        setClickedButton(false);
      }
    })();
    setStateDeterminationDone(true);
  });

  return (
    <form onSubmit={handleSubmit} action={action} method={method}>
      <S.ToggleButton
        type="submit"
        title={`${clickedButton ? word.off : word.on}${
          target ? ` ${target}` : ''
        }`}
      >
        {Icon && (clickedButton ? Icon.off : Icon.on)}
        {clickedButton ? word.off : word.on}
      </S.ToggleButton>
    </form>
  );
});

export default ToggleButton;
