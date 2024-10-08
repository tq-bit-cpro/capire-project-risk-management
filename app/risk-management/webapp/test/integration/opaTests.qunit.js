sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/test/integration/FirstJourney',
		'riskmanagement/test/integration/pages/RiskServiceList',
		'riskmanagement/test/integration/pages/RiskServiceObjectPage'
    ],
    function(JourneyRunner, opaJourney, RiskServiceList, RiskServiceObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRiskServiceList: RiskServiceList,
					onTheRiskServiceObjectPage: RiskServiceObjectPage
                }
            },
            opaJourney.run
        );
    }
);