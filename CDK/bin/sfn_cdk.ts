#!/usr/bin/env node

// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from '@aws-cdk/core';
import { SfnCdkStack } from '../lib/sfn_cdk-stack';

const app = new cdk.App();
new SfnCdkStack(app, 'SfnCdkStack');
