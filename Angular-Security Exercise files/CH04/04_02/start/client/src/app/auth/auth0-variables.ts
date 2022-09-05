interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'bRezVdsN5f4p1EARRWc53FiOIvqxgAA2',
  domain: 'mannyhenri.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
