function savePDF() {
    demoFromHTML();
}

/**
 * Creates a PDF document using passed values
 */
function demoFromHTML() {
    var doc = new jsPDF('p', 'in', 'letter');
    // var source = $('#po-form').serializeArray();
    var formd = $("#po-form");
    var source = getFormData(formd);

    console.log(source)
    var specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true;
        }
    };

    doc.fromHTML(
        source, // HTML string or DOM elem ref.
        0.5, // x coord
        0.5, // y coord
        {
            'width': 7.5, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        });

    doc.text("source", 10, 10); // <-- add 10, 10

    doc.save('PurchaseOrder.pdf')
}
function getFormData(formd){
    var unindexed_array = formd.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}