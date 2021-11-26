import useUser from '@hooks/useUser';
import { observer } from 'mobx-react-lite';
import Avatar from '@components/common/Avatar';
import DropDown from '@components/common/DropDown';
import type { DropDownChildProps } from '@components/service/Header/Desktop';
import * as S from './styles';

const Profile = observer<DropDownChildProps>(
  ({ isOpen, toggleDropDownState }) => {
    const user = useUser();

    const handleClick = (e: React.MouseEvent<HTMLDetailsElement>) => {
      e.preventDefault();
      toggleDropDownState('profile');
    };

    return (
      <DropDown
        SvgIcon={() => <Avatar avatarUrl={user.avatar_url} />}
        open={isOpen}
        onClick={handleClick}
      >
        <div>임시 아이템</div>
      </DropDown>
    );
  },
);

export default Profile;
