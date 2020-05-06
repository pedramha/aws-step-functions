#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SfnCdkStack } from '../lib/sfn_cdk-stack';

const app = new cdk.App();
new SfnCdkStack(app, 'SfnCdkStack');
