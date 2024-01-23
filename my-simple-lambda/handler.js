//hello hio
exports.handler = async (event, context) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  
  const records = event.Records;
  for (const record of records) {
    const body = JSON.parse(record.body);
    console.log('SQS Message:', body);

    await sleep(1000);
  }

  console.log('Processing completed.');
  return { statusCode: 200, body: 'Processing completed.' };
};


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

