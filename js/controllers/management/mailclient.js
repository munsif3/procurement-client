var clientId = '686874587082-vgtj8tt89egsc9pq9okvr1pf5rqpk47f.apps.googleusercontent.com';
var apiKey = 'AIzaSyAopoVb9EXkLJdSriR6c0GDQs7FTpn8L4g';
var scopes = 'https://www.googleapis.com/auth/gmail.readonly ' + 'https://www.googleapis.com/auth/gmail.send';

function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth, 1);
}

function checkAuth() {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: true
    }, handleAuthResult);
}

function handleAuthClick() {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false
    }, handleAuthResult);
    return false;
}

function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        loadGmailApi();
        $('#authorize-button').remove();
    } else {
        $('#authorize-button').removeClass("hidden");
        $('#authorize-button').on('click', function () {
            handleAuthClick();
        });
    }
}

function loadGmailApi() {
    gapi.client.load('gmail', 'v1', displayInbox);
}

function displayInbox() {
    var request = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds': 'INBOX',
        'maxResults': 10
    });
}


$('#update-status').on('click', function () {
    if ($('#itemId').val() == 1) {
        console.log("in 1")
        sendEmail();
    }else{
        console.log("in 0")
        
    }
});

function sendEmail() {
    sendMessage({
            'To': $('#supplier-email').text(),
            'Subject': $('#message-subject').text()
        },
        $('#message-body').text(),
        composeTidy
    );

    return false;
}

function sendMessage(headers_obj, message, callback) {
    console.log(headers_obj)
    console.log(message)
    var email = '';
    console.log(headers_obj);
    console.log(message);
    console.log(callback);
    for (var header in headers_obj)
        email += header += ": " + headers_obj[header] + "\r\n";

    email += "\r\n" + message;

    var sendRequest = gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
            'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
        }
    });

    return sendRequest.execute(callback);
}

function composeTidy() {
    $('#compose-modal').modal('hide');

    $('#compose-to').val('');
    $('#compose-subject').val('');
    $('#compose-message').val('');

    $('#send-button').removeClass('disabled');
}
// });