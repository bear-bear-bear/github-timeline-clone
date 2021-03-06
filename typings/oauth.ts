import '@octokit/types';
import type { Endpoints } from '@octokit/types';
import { Language } from '@lib/getLanguageColor';

export type FetchState = 'init' | 'loading' | 'done' | 'error';
export type EventType =
  | 'CommitCommentEvent'
  | 'CreateEvent'
  | 'DeleteEvent'
  | 'ForkEvent'
  | 'GollumEvent'
  | 'IssueCommentEvent'
  | 'IssuesEvent'
  | 'MemberEvent'
  | 'PublicEvent'
  | 'PullRequestEvent'
  | 'PullRequestReviewEvent'
  | 'PullRequestReviewCommentEvent'
  | 'PushEvent'
  | 'ReleaseEvent'
  | 'SponsorshipEvent'
  | 'WatchEvent';

export type ParsedGetAccessTokenResponseQuery =
  | {
      access_token: string;
      token_type: string;
    }
  | {
      error: string;
      error_type: string;
      error_description: string;
    };

type Unpacked<T> = T extends (infer U)[] ? U : T;

export type SearchedIssues =
  Endpoints['GET /search/issues']['response']['data'];

export type SimpleRepositories =
  Endpoints['GET /user/repos']['response']['data'];
export type SimpleRepository = Unpacked<SimpleRepositories>;

export type SearchedRepositories =
  Endpoints['GET /search/repositories']['response']['data']['items'];
export type SearchedRepository = Unpacked<SearchedRepositories> & {
  language: Language;
};

export type Notifications = Endpoints['GET /notifications']['response']['data'];
export type Notification = Unpacked<Notifications> & {
  language: Language;
};

export type MyEvents =
  Endpoints['GET /users/{username}/events']['response']['data'];
export type MyEvent = Unpacked<MyEvents> & {
  payload: {
    // 응답엔 있지만 타입 선언엔 누락된 타입들 임시 보완
    pull_request?: {
      title: string;
      html_url: string;
    };
    review?: {
      title: string;
      html_url: string;
    };
  };
};

export type OwnerRepository =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data'] & {
    type: EventType;
    language: Language;
  };

export type OthersEvents =
  Endpoints['GET /users/{username}/received_events']['response']['data'];
export type OthersEvent = Unpacked<OthersEvents> & {
  type: EventType;
  repo: OwnerRepository & {
    language: Language;
  };
  payload: {
    forkee?: {
      full_name: string;
      html_url: string;
    };
  };
  created_at: string;
};

export type User = Endpoints['GET /user']['response']['data'];
