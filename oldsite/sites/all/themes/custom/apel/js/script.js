jQuery(document).ready(function($){
    
    $('.view-filters').append($('.view-header'));
    var titre = $('#page #main-content .pane-page-title h1').html();


    $( ".a-lire-aussi .views-row .views-field-title a" ).each(function() {
        var titreLireAussi= $(this).html();
        if(titre==titreLireAussi){
            $(this).hide();
                    console.log(titreLireAussi);
        }

      });
     
    var fileActu=$('.pane-articles .view-display-id-block_document_lier .field-name-field-document-lier .file a').html();
    if(fileActu==null){
        $('.panel-col-last .pane-articles ').hide();
    }
    
    var fileEvent=$('.pane-evenement .view-display-id-block_document_lier .field-name-field-document-lier .file a').html();
    if(fileEvent==null){
        $('.panel-col-last .pane-evenement ').hide();
    }
    
    
});

