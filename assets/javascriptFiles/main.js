$(document).ready(function () {
    starter()
})

const starter = () => {
    $('#changingStatusIndex>li:nth-child(1)>div:nth-child(3)').addClass('status')
}
function changingStatus(object) {
    $('#changingStatusIndex>li>div:nth-child(3)').removeClass('status')
    $(`#${object.id}>div:nth-child(3)`).addClass('status')
}