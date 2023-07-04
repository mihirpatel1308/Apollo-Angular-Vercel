import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';

const uri = 'https://node-graph-ql-vercel.vercel.app/graphql';

@NgModule({
  imports: [HttpClientModule, ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, AuthService],
    },
  ],
})
export class GraphQLModule { }

export function createApollo(httpLink: HttpLink, authService: AuthService): any {
  const authMiddleware = setContext(async (_, { headers }) => {
    const token = await getAccessToken(authService);
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const http = httpLink.create({ uri });
  const link = ApolloLink.from([authMiddleware, http]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

async function getAccessToken(authService: AuthService): Promise<string | null> {
  try {
    const accessToken = await firstValueFrom(authService.getAccessTokenSilently());
    return accessToken;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
}
