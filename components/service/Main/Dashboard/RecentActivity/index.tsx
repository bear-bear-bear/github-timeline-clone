import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import Loading from '@components/common/Loading';
import type { Event } from '@typings/oauth';
import * as S from './styles';
import { useEffect } from 'react';
import useUser from '@hooks/useUser';

const ItemIcon = {
  Pull: S.PullIcon,
  Issue: S.IssueIcon,
};

const sliceItemContent = (str: string) => {
  if (str.length <= 27) return str;
  return str.slice(0, 27) + '...';
};

type ActivityItemProps = {
  activity: Event;
};
const ActivityItem = observer(({ activity }: ActivityItemProps) => {
  const eventType = (activity.type as string).includes('Pull') // 야매.. 깃허브에서 이벤트 유니온 타입을 제공하지 않음
    ? 'Pull'
    : 'Issue';
  const Icon = ItemIcon[eventType];

  const payload = activity.payload;
  const eventOrigin = payload.review || payload.pull_request || payload.issue; // 위 주석과 같은 이유로 야매..
  const href = eventOrigin?.html_url || activity.repo.url;
  const content = eventOrigin?.title || activity.type;

  return (
    <S.Item>
      <S.Link href={href}>
        <Icon />
      </S.Link>
      <S.Link href={href}>
        <p>{sliceItemContent(content as string)}</p>
      </S.Link>
    </S.Item>
  );
});

const BoxLabel = observer(() => <S.Label>Recent activity</S.Label>);

const RecentActivity = observer(() => {
  const user = useUser();
  const { myActivity } = useStore();

  useEffect(() => {
    if (myActivity.isNotFetched) {
      myActivity.fetchActivities(user);
    }
  });

  if (myActivity.isNotFetched) return <Loading />;
  return (
    <S.RecentActivities BoxLabel={BoxLabel} boxStyle={S.BoxStyle}>
      <div>
        {myActivity.recentActivities.map((activity) => (
          <ActivityItem activity={activity} key={activity.id} />
        ))}
      </div>
    </S.RecentActivities>
  );
});

export default RecentActivity;
