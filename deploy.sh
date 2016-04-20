#!/usr/bin/env bash
set -ev

if [[ "$TRAVIS_BRANCH" == "master" && "$TRAVIS_PULL_REQUEST" == "false" ]]; then
  echo "about to firebase deploy dev"
  firebase deploy --token $FIREBASE_TOKEN_DEV
fi

if [[ "$TRAVIS_BRANCH" == "master" && "$TRAVIS_PULL_REQUEST" == "false" ]]; then
    echo "about to firebase deploy"
    firebase deploy --token $FIREBASE_TOKEN
fi
