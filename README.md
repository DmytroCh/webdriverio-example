
# webdriverio-example

This is example of E2E written in webdriverio framework

## Init WebDriverIO project

`npm init wdio .`

## How to run

`npx wdio`
  
## Scenarios

 1. Execute tests on Careers page:
	 2. Visit "Careers" page via UI
	 3. Verify if URL is proper
	 4. Get list of offers
	 5. Verify if there are offers there
 2. Should work department filter:
	 3. Visit "Careers" page via UI
	 4. Verify if URL is proper
	 5. Get list of offers without filters
	 6. Prepare list of expected offers
	 7. Set filter to 'QA' department
	 8. Get list of offers with filter
	 9. Compare UI list to expected list by numbers
	 10. Verify if all elements contains 'QA' in title 

 