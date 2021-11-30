import oauth2Axios from '@lib/axios';
import { observer } from 'mobx-react-lite';
import { FormEventHandler, useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import useToken from '@hooks/useToken';
import axios from 'axios';

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
};

const ToggleButton = observer<Props>(({ api, word, Icon }) => {
  const accessToken = useToken();
  const [clickedButton, setClickedButton] = useState<boolean>(false);
  const [stateDeterminationDone, setStateDeterminationDone] =
    useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      const action = e.currentTarget.getAttribute('action') as string;
      const method = e.currentTarget
        .getAttribute('method')
        ?.toLowerCase() as Method;

      try {
        await oauth2Axios[method](action);
        setClickedButton((prev) => prev);
      } catch (err) {
        console.error(err);
      }
    },
    [],
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
    <form
      onSubmit={handleSubmit}
      action={clickedButton ? api.off.url : api.on.url}
      method={clickedButton ? api.off.method : api.on.method}
    >
      <S.ToggleButton type="submit">
        {Icon && (clickedButton ? Icon.off : Icon.on)}
        {clickedButton ? word.off : word.on}
      </S.ToggleButton>
    </form>
  );
});

export default ToggleButton;
