import type { Endpoints } from '@octokit/types';
import { components } from '@octokit/openapi-types';

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

export type RepositoryInfo = components['schemas']['minimal-repository'];
export type RepositoryInfos = RepositoryInfo[];

export type Notification = components['schemas']['thread'];

export type User = components['schemas']['private-user'];
