// This plugin selects all layers with the same name as the selected layer
// It will ignore any layers that exist within instances, only selecting the entire instance if the name matches the selection.
// Since "Select all with same properties" is a thing, this probably isn't needed... stopping development
const node = figma.currentPage;
const sel = figma.currentPage.selection;
const newSelection = [];
if (sel.length == 1) {
    let findName = sel[0].name;
    console.log(findName);
    const nodes = node.findAll(node => node.name === findName && node.type !== "INSTANCE");
    console.log(nodes.length);
    for (let i in nodes) {
        //newSelection.push(i);
    }
    //figma.currentPage.selection = newSelection;
    //alert(nodes.length+' objects added to selection!');
}
else if (sel.length < 1) {
    alert('No objects selected.');
}
else {
    alert('Select only 1 object. Support for selecting multiple objects with different names is in development.');
}
// const nodes = node.findAll(node => node.locked == true);
// const nodesno = nodes.length;
//
// console.log(nodesno);
//
//
// if (nodesno > 0) {
// 	nodes.forEach(i => {
// 		i.locked = false;
// 	});
// 	alert(nodesno + ' layer'+(nodesno==1?' has':'s have')+' been unlocked!');
// } else {
// 	alert('No layers are locked');
// }
figma.closePlugin();
