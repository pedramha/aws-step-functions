# Simple retrier

A workflow that includes a simple retrier to retry failures with exponential backoff.

## Deployment instructions

```bash
sam build && sam deploy --guided
```

It is safe to accept all defaults. The state machine will deploy into your AWS account in the region you specify.

---
Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
