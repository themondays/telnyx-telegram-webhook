# Telnyx inbound SMS delivery for Telegram

Basic Google Cloud Function that will deliver inbound telnyx SMS to Telegram chat.

## Installation

1. Create a telegram bot (you need to obrain the bot credentials as well).
2. Obtain chat id for your bot.
3. Create environment.yaml configuration (use environment.example.yaml).
4. Deploy function to Google Cloud.

## Deployment

```
#!/bin/sh
gcloud beta functions deploy telnyx-telegram-webhook \
    --env-vars-file environment.yaml \
    --configuration=template.yaml
    --project <project-id> \
    --trigger-http \
    --account <gcloud-account> \
    --runtime nodejs10 \
    --source=./src \
    --memory=128 \
    --entry-point=handler
```

For gcloud deploy usage:

```
gcloud beta functions deploy --help
```

## References

* [Telnyx receiving webhook](https://developers.telnyx.com/docs/v1/messaging/webhooks/receiving-webhooks)
* [Google Cloud Function docs](https://cloud.google.com/functions/docs/)

## License

MIT - See [LICENSE](LICENSE) for more information.