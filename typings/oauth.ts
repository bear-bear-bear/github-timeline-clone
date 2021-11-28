import type { Endpoints } from '@octokit/types';

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

export type Repositories = Endpoints['GET /user/repos']['response']['data'];
export type Repository = Unpacked<Repositories>;

export type Notifications = Endpoints['GET /notifications']['response']['data'];
export type Notification = Unpacked<Notifications>;

export type Events =
  Endpoints['GET /users/{username}/events']['response']['data'];
export type Event = Unpacked<Events>;

export type User = Endpoints['GET /user']['response']['data'];
