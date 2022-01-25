const {BigQuery} = require('@google-cloud/bigquery');
const bigquery = new BigQuery();
module.exports = (req, res) => {
    console.log('BSS RECEIVED JSON FILE');
    const {Storage} = require('@google-cloud/storage');
    const storage = new Storage();
    var archivo = storage.bucket('bss_json').file('pulllogs.json').createReadStream();
    console.log('BSS CONCAT JSON FILE');
    var  datajson = '';
    archivo.on('data', function(jsonLine) {
        datajson += jsonLine;
    }).on('end', function() {
     datajson = JSON.parse(datajson);
      //console.log(datajson);
      const TableObjectHeader = {
            "tableReference": {
              "datasetId": "behavior_log",
              "tableId": "bsms_flat",
            }
          }
      const bigqueryClient = new BigQuery({projectId: 'behavior-support-system'});
      const dataset = bigqueryClient.dataset(TableObjectHeader['tableReference']['datasetId']);
      const table = dataset.table(TableObjectHeader['tableReference']['tableId']);
      table.insert(datajson, function(err, response) {
            console.log("satish error:"+JSON.stringify(err));
            console.log("satish response:"+JSON.stringify(response));
      });
      console.log("BSS IMPORT COMPLETE");
    });
};