import { useEffect, useState } from 'react';
import axios from 'axios';
import { github } from '@lib/oauth';
import type { OthersEvent, SearchedIssues } from '@typings/oauth';

type IssueCount = number;
export default function useForkContentState(activity: OthersEvent): IssueCount {
  const [issueCount, setIssueCount] = useState<number>(0);
  const [issueCountReqDone, setIssueCountReqDone] = useState<boolean>(false);

  useEffect(() => {
    // "help wanted" 라벨이 붙은 이슈 개수 get
    if (issueCountReqDone) {
      return;
    }
    console.log('이슈 패치 발생');
    try {
      (async () => {
        await axios
          .get<SearchedIssues>(
            `${github.API_HOST}/search/issues?q=${encodeURIComponent(
              `repo:${activity.repo.full_name} label:"help wanted" is:open is:issue`,
            )}`,
          )
          .then(({ data }) => setIssueCount(data.total_count));
      })();
    } catch (err) {
      /* */
    }
    setIssueCountReqDone(true);
  });

  return issueCount;
}
