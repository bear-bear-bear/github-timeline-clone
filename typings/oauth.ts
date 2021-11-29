import '@octokit/types';
import type { Endpoints } from '@octokit/types';
import { CustomEvent } from '@octokit/types';

declare module '@octokit/types' {
  export type CustomEvent = {
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
}

export type FetchState = 'init' | 'loading' | 'done' | 'error';

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

export type SimpleRepositories =
  Endpoints['GET /user/repos']['response']['data'];
export type SimpleRepository = Unpacked<SimpleRepositories>;

export type Repositories =
  Endpoints['GET /search/repositories']['response']['data']['items'];
export type Repository = Unpacked<Repositories>;

export type Notifications = Endpoints['GET /notifications']['response']['data'];
export type Notification = Unpacked<Notifications>;

export type Events =
  Endpoints['GET /users/{username}/events']['response']['data'];
export type Event = Unpacked<Events> & CustomEvent;

export type User = Endpoints['GET /user']['response']['data'];
