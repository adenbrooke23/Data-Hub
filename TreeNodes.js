// You can find instructions for this file here:
// http://www.treeview.net

// Decide if the names are links or just the icons
USETEXTLINKS = 1  //replace 0 with 1 for hyperlinks

// Decide if the tree is to start all open or just showing the root folders
STARTALLOPEN = 0 //replace 0 with 1 to show the whole tree

ICONPATH = 'Support/' //change if the gif's folder is a subfolder, for example: 'images/'


USEICONS = 1

{
foldersTree = gFld("Title", "title.htm")
foldersTree.iconSrc = ICONPATH + "Gif/globe.gif"
Diag_Node = insFld(foldersTree, gFld("DATA_HUB.DM1", "javascript:parent.op()"))
Diag_Node.iconSrc = ICONPATH + "Gif/diagram.gif"
Diag_Node.iconSrcClosed = ICONPATH + "Gif/diagram.gif"
Model_Node = insFld(Diag_Node, gFld("WE26", "javascript:parent.op()"))
Model_Node.iconSrc = ICONPATH + "Gif/physical.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/physical.gif"
{
Submodel_afab7821fb164c40a67561e806f21f49 = insFld(Model_Node, gFld("Main Model", "javascript:parent.op()"))
Submodel_afab7821fb164c40a67561e806f21f49.iconSrc = ICONPATH + "Gif/grnfldr.gif"
Submodel_afab7821fb164c40a67561e806f21f49.iconSrcClosed = ICONPATH + "Gif/grnfldr.gif"
SubmodelImgNode = insDoc(Submodel_afab7821fb164c40a67561e806f21f49, gLnk("R", "Model Image", "Content/Submodel_afab7821fb164c40a67561e806f21f49_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_afab7821fb164c40a67561e806f21f49, gFld("Tables", "Content/Sub_afab7821fb164c40a67561e806f21f49_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_afab7821fb164c40a67561e806f21f49, gFld("Columns", "Content/Sub_afab7821fb164c40a67561e806f21f49_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
}
}
