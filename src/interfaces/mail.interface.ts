export interface SendEmailInterface{
    from? : {
        address : string;
        name : string;
    };
    to : string;
    subject : string;
    html : string;
    text? : string;
}