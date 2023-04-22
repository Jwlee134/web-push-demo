This is a demo application for implementing service worker and web push.

## Getting Started

**⚠️ Skip this step if you have already generated keys.**

Get your publicKey and privateKey:

```bash
npm run gen
```

You will get a JSON as follows:

```json
{
  "publicKey": "BGtkbcjrO12YMoDuq2sCQeHlu47uPx3SHTgFKZFYiBW8Qr0D9vgyZSZPdw6_4ZFEI9Snk1VEAj2qTYI1I1YxBXE",
  "privateKey": "I0_d0vnesxbBSUmlDdOKibGo6vEXRO-Vu88QlSlm5j0"
}
```

Copy and paste both of keys to each constants in `src/lib/constants.ts`

<hr />

Run the development server:

```bash
npm run dev
```

<hr />

**⚠️ Make sure to follow two steps below if you also want to test on your mobile devices.**

1. Get a https address:

```bash
npm run lt
```

2. Copy the address and go to `src/libs/constants.ts`. Replace `http://localhost:3000` with the copied address.

<hr />

You will see 2 buttons in the root page. Click `check` button to test if your browser supports service worker. After clicking this you will see a JSON message in terminal something like this:

```json
{
  "message": "This browser supports serviceWorker.",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  "isSecureContext": true
}
```

After making sure your browser supports it, click `subscribe` button. It will show you notification permission request pop up.
When you allow the permission you will see that `src/lib.data.json` is updated with your browser's keys.

Trigger push notification:

```bash
npm run push
```

It will show you a notification with text "Hello, World!".
