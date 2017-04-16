# auth-grapqhl

Code in this repo differs from the course as I am forcing myself to keep the API and client on different servers.
This allows me to learn more about how Apollo Client handles cross domain GQL servers, and allows me to delve more into how passport and JWT work cross domain.

NOTE this is not really a production ready API server as it does not revoke tokens, and logout on the server is ignored. The API does not enforce login to access endpoints on GQL which requires a bit more work as to allow certain GQL requests to require authentication and others to not be.
