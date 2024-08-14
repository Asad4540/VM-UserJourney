$(document).ready(function () {
  //triggered when modal is about to be shown
  $("#mediumModal").on("show.bs.modal", function (e) {
    //get rowdata attribute of the clicked element
    var rowdata = $(e.relatedTarget).data("rowdata");

    // tableHeadingOriginal = csvParsedData[0];
    var leadDetailsArray = rowdata.split(",");
    var details = "";
    // for(i=0; i<tableHeadingOriginal.length;i++){
    //   details += `<div class="col-md-6 text-sm">
    //   <dt>${tableHeadingOriginal[i]}</dt>
    //   <dd>${leadDetailsArray[i]}</dd>
    // </div>`;
    // }
    details += `<div class="col-md-6"><br/>
      <dt>Name</dt>
      <dd>${leadDetailsArray[1]} ${leadDetailsArray[2]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Offer Name</dt>
      <dd>${leadDetailsArray[8]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Email</dt>
      <dd>${leadDetailsArray[4]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Sent Time</dt>
      <dd>${leadDetailsArray[9]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Open Time</dt>
      <dd>${leadDetailsArray[10]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Click Time</dt>
      <dd>${leadDetailsArray[11]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Download Time</dt>
      <dd>${leadDetailsArray[7]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Consent Opt-in</dt>
      <dd>${leadDetailsArray[12]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>IP Address</dt>
      <dd>${leadDetailsArray[6]}</dd>
    </div>`;
    if(leadDetailsArray[13]!==''){
    details += `<div class="col-md-6"><br/>
      <dt>Check box 1</dt>
      <dd>${leadDetailsArray[13]}</dd>
    </div>`;
    }
    if(leadDetailsArray[14]!==''){
    details += `<div class="col-md-6"><br/>
      <dt>Check box 2</dt>
      <dd>${leadDetailsArray[14]}</dd>
    </div>`;
    }
    $("#leadDetails").html(details);
  });

  //triggered when modal is about to be shown
  $("#subscriberModal").on("show.bs.modal", function (e) {
    //get rowdata attribute of the clicked element
    var rowdata = $(e.relatedTarget).data("rowdata");

    // tableHeadingOriginal = csvParsedData[0];
    var leadDetailsArray = rowdata.split(",");
    var details = "";
    // for(i=0; i<tableHeadingOriginal.length;i++){
    //   details += `<div class="col-md-6 text-sm">
    //   <dt>${tableHeadingOriginal[i]}</dt>
    //   <dd>${leadDetailsArray[i]}</dd>
    // </div>`;
    // }
    details += `<div class="col-md-6"><br/>
      <dt>Name</dt>
      <dd>${leadDetailsArray[1]} ${leadDetailsArray[2]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Added via</dt>
      <dd>Monthly Newsletter</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Email</dt>
      <dd>${leadDetailsArray[4]}</dd>
    </div>`;
    details += `<div class="col-md-6"><br/>
      <dt>Opt-in Time</dt>
      <dd>${leadDetailsArray[9]}</dd>
    </div>`;
    
    $("#subscriberDetails").html(details);
  });
});