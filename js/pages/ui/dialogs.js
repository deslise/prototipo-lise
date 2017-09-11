$(function () {
    $('.js-sweetalert button').on('click', function () {
        var type = $(this).data('type');
        if (type === 'basic') {
            showBasicMessage();
        }
        else if (type === 'with-title') {
            showWithTitleMessage();
        }
        else if (type === 'success') {
            showSuccessMessage();
        }
        else if (type === 'confirm') {
            showConfirmMessage();
        }
        else if (type === 'cancel') {
            showCancelMessage();
        }
        else if (type === 'with-custom-icon') {
            showWithCustomIconMessage();
        }
        else if (type === 'html-message') {
            showHtmlMessage();
        }
        else if (type === 'autoclose-timer') {
            showAutoCloseTimerMessage();
        }
        else if (type === 'prompt') {
            showPromptMessage();
        }
        else if (type === 'ajax-loader') {
            showAjaxLoaderMessage();
        }
    });
});

//These codes takes from http://t4t5.github.io/sweetalert/
function showBasicMessage() {
    swal("Here's a message!");
}

function showWithTitleMessage() {
    swal("Here's a message!", "It's pretty, isn't it?");
}

function showSuccessMessage() {
    swal("Cadastro realizado com sucesso!", "Agora é só esperar! Em breve seu plano de negócio será ativado!", "success");
}

function showConfirmMessage() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function () {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
    });
}

function confirmarCadastro() {
    swal({
        title: "Cadastro realizado com sucesso!",
        text: "Agora é só esperar! Em breve seu plano de negócio será ativado!",
        type:"success",
        showCancelButton: false,
        confirmButtonColor: "#607D8B"
    }, function() {
        window.location="index.html";
    })
}

function salvarCategoria() {
    swal({
        title: "Categoria salva!",
        // text: "Agora é só esperar! Em breve seu plano de negócio será ativado!",
        type:"success",
        showCancelButton: false,
        confirmButtonColor: "#607D8B"
    }, function() {
        window.location="admin.html";
    })
}



function salvarCadastro() {
    swal({
        title: "Cadastro salvo com sucesso!",
        text: "Agora é só esperar! Em breve seu plano de negócio será ativado!",
        type:"success",
        showCancelButton: false,
        confirmButtonColor: "#607D8B"
    }, function() {
        window.location="index.html";
    })
}

function confirmarSolicitacao() {
    swal({
        title: "Sua solicitação foi enviada",
        text: "Em breve você receberá uma resposta.",
        type:"success",
        showCancelButton: false,
        confirmButtonColor: "#607D8B"
    }, function() {
        window.location="index.html";
    })
}

function cancelarCadastro() {
    swal({
        title: "Você tem certeza?",
        // text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#607D8B",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        closeOnConfirm: false
    }, function () {
        window.location="index.html";
    })
}

function aplicarCategoria() {
    swal({
        title: "As categorias foram salvas.",
        // text: "A análise iniciará novamente, em breve seu plano estará ativo.",
        type:"success",
        showCancelButton: false,
        confirmButtonColor: "#607D8B"
    }, function() {
        window.location="admin.html";
    })
}

function notificarRecusacao() {
    swal({
        title: "O usuário será notificado.",
        // text: "A análise iniciará novamente, em breve seu plano estará ativo.",
        type:"success",
        showCancelButton: false,
        confirmButtonColor: "#607D8B",
        closeOnConfirm: true
    }, function() {
        window.location="admin.html";
    })
}


function cancelarEdicao() {
    swal({
        title: "Você tem certeza?",
        // text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#607D8B",
        confirmButtonText: "Sim",
        cancelButtonText: 'Não',
        closeOnConfirm: false
    }, function () {
        window.location="index.html";
    })
}

function deletarPlano() {
    swal({
        title: "Você tem certeza excluir o plano?",
        text: "Essa ação não pode ser revertida.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#607D8B",
        confirmButtonText: "Sim",
        cancelButtonText:"Não",
        closeOnConfirm: false
    }, function () {
        swal({
            title:"Plano de negócio excluido!",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#607D8B",
            closeOnConfirm: false
        }, function () {
            window.location = "index.html";
            })
    })
}

function excluirCategoria() {
    swal({
        title: "Você tem certeza disso?",
        text: "Essa ação não pode ser revertida.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#607D8B",
        confirmButtonText: "Sim",
        cancelButtonText:"Não",
        closeOnConfirm: false
    }, function () {
        swal({
            title:"Categoria excluido!",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#607D8B",
            closeOnConfirm: false
        }, function () {
            window.location = "admin.html";
            })
    })
}

function showCancelCadastro() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function () {
        swal("Deleted!", "Your imaginary file has been deleted.", "error");
    });
}

function showCancelMessage() {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
    });
}

function showWithCustomIconMessage() {
    swal({
        title: "Sweet!",
        text: "Here's a custom image.",
        imageUrl: "../../images/thumbs-up.png"
    });
}

function showHtmlMessage() {
    swal({
        title: "HTML <small>Title</small>!",
        text: "A custom <span style=\"color: #CC0000\">html<span> message.",
        html: true
    });
}

function showAutoCloseTimerMessage() {
    swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
    });
}

function showPromptMessage() {
    swal({
        title: "An input!",
        text: "Write something interesting:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something"
    }, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("You need to write something!"); return false
        }
        swal("Nice!", "You wrote: " + inputValue, "success");
    });
}

function showAjaxLoaderMessage() {
    swal({
        title: "Ajax request example",
        text: "Submit to run ajax request",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
    }, function () {
        setTimeout(function () {
            swal("Ajax request finished!");
        }, 2000);
    });
}