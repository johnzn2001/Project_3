function alphSort() {
    //console.log("Just your average debug: 2");
    var list, i, switching, b, desc, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("majorslist");
    //console.log("list: ");
    //console.log(list);
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("DT");
        desc = list.getElementsByTagName("DD");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Check if the next item should switch place with the current item,
            based on the sorting direction (asc or desc): */
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    /* If next item is alphabetically lower than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    /* If next item is alphabetically higher than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            //  console.log("Parent");
            //  console.log(b[i]);
            //  console.log(b[i].parentNode);
            //  console.log(b[i + 1]);
            //  console.log("Desc");
            //  console.log(desc[i].innerHTML);
            //  console.log(desc[i].parentNode);
            // console.log(desc[i].firstChild);
             //break;
            //desc[i].parentNode.insertBefore(desc[i + 1], desc[i]);
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            //break;
            //TODO
            //switches heading, also need to switch its descriptions
            desc[i].parentNode.insertBefore(desc[i + 1], desc[i]);
            //desc[i].parentNode.insertBefore(b[i + 1], b[i]);
            // console.log("desc i");
            // console.log(desc[i]);
            // console.log(desc[i+1]);
            // console.log(b[i]);
            // console.log(b[i + 1]);
            // console.log("list");
            // console.log(b.length);
            // console.log(desc.length);
            // console.log(i);
            // console.log(list.childNodes);
            // console.log(list.childNodes[i*2]);
            // console.log(list.childNodes[i*2 + 2]);
            // console.log(list.childNodes[i*2 + 1]);
            list.childNodes[(i*2) + 2].parentNode.insertBefore(list.childNodes[(i*2)+1], list.childNodes[(i*2) + 3]);
            // console.log("after: ");
            // console.log(list.childNodes[i*2]);
            // console.log(list.childNodes[i*2 + 2]);
            // console.log(list.childNodes[i*2 + 1]);
            //break;
            switching = true;
            // Each time a switch is done, increase switchcount by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}