# iOS Build Pipeline

## Status
✅ **Compilation** - Working (Build #29)
⚠️ **TestFlight Upload** - Requires App Store Connect registration

## Current Pipeline
- **Build Lane:** `fastlane build` - Compiles for iOS Simulator (no signing)
- **Upload Lane:** `fastlane build_and_upload` - Requires `ENABLE_TESTFLIGHT=true`

## To Enable TestFlight
1. Register `com.neilross.testapp` in App Store Connect
2. Set `ENABLE_TESTFLIGHT=true` in GitHub secrets
3. Trigger `build_and_upload` lane

## Required Secrets
- `ASC_KEY_ID` - App Store Connect API Key ID
- `ASC_ISSUER_ID` - API Key Issuer ID  
- `ASC_KEY_P8` - API Key file (base64 encoded)
- `ASC_TEAM_ID` - Apple Developer Team ID
- `ENABLE_TESTFLIGHT` - Set to `true` to enable uploads

## Latest Build
Build #29 - ✅ Success (compilation only)
