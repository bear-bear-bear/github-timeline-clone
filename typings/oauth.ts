// import type { Endpoints } from '@octokit/types';
import { components } from '@octokit/openapi-types';

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

export type RepositoryInfo = components['schemas']['repo-search-result-item'];
export type RepositoryInfos =
  components['schemas']['repo-search-result-item'][];

export type User = components['schemas']['private-user'];
