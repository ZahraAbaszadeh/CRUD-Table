let counter = 1
$('.clone-action').click(e => {
     e.preventDefault()
     const $clickedRow = $(e.target).closest('tr')
     const $newRow = $clickedRow.clone(true)
     $newRow.find('input[type=\'radio\']').attr('name', `number[${counter++}]`)
     $($newRow).insertAfter($clickedRow)
     calc()
})
$('.delete-action').click(e => {
     e.preventDefault()
     $(e.target).closest('tr').remove()
     calc()
})
$('input[type=\'radio\']').click(e => {
     const $target = $(e.target)
     const getInputs = () => $target.closest('tr').find('input:not([type=\'radio\'])')
     if ($target.hasClass('status-confirmed')) {
          getInputs().attr('disabled', true)
     } else {
          getInputs().attr('disabled', false)
     }
     calc()
})
let $ROW = $('tbody tr').clone(true)


$('.add-action').click(e => {
     e.preventDefault()
     const $newRow = $ROW.clone(true)
     $newRow.find('input[type=\'radio\']').attr('name', `number[${counter++}]`)
     $('tbody').prepend($newRow)
     calc()
})
const calc = () => {
     $('#all-rows-number').html($('tbody tr').length)
     $('#not-confirmed-number').html($('tbody tr').length - $('tbody input.status-confirmed:checked').length)
}
calc()