$(document).ready(function () {
    starter()
})

const starter = () => {
    $('#changingStatusIndex>li:nth-child(1)>a>div:nth-child(3)').addClass('status')
}
function changingStatus(object) {
    $('#changingStatusIndex>li>a>div:nth-child(3)').removeClass('status')
    $(`#${object.id}>a>div:nth-child(3)`).addClass('status')
}