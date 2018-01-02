const passport=require('passport');
const AzureADStrategy=require('passport-azure-ad').OIDCStrategy;
const keys=require('./keys');

//intializing AzureAD js to passport
console.log("Initailizing Passport auzre statorgy");
passport.use(new AzureADStrategy({
//options for AzureAD strategy
identityMetadata: 'https://login.microsoftonline.com/<domain ID>/v2.0/.well-known/openid-configuration',
responseType: 'code id_token',
responseMode: 'form_post',
clientID: keys.azureAD.clientID,
clientSecret: keys.azureAD.clientSecret,
"scope":["email","profile"],
redirectUrl:'http://localhost:3000/auth/azuread/redirect',
allowHttpForRedirectUrl: true
},function(iss, sub, profile, accessToken, refreshToken, done) {
    //passport callback function
    console.log(profile._json);
    if (!profile.oid) {
        return done(new Error("No oid found"), null);
      }
})
);
