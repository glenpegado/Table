//The use of functions makes it easier to visualize each component

function sortTable( table, col, reverse ) {
    let tb = table.tBodies[ 0 ],
        tr = Array.prototype.slice.call( tb.rows, 0 ),
        i;

    reverse = -( ( +reverse ) || -1 );

//sorting the rows
    tr = tr.sort( ( a, b ) => {
        return reverse * ( a.cells[ col ].textContent.trim().localeCompare( b.cells[ col ].textContent.trim()))
    })

// Append each of the rows in order
    for ( i = 0; i < tr.length; ++i ) {
        tb.appendChild( tr[ i ] );
    }
}

function makeSortable( table ) {
    let th = table.tHead,
        index;

    th && ( th = th.rows[ 0 ] ) && ( th = th.cells );
    if ( th ) index = th.length
    else return;

    while ( --index >= 0 )( function ( index ) {
        let dir = 1;
        th[ index ].addEventListener( 'click', function () {
            sortTable( table, index, ( dir = 1 - dir ) )
        } );
    }( index ) );
}

function makeAllSortable( parent ) {
    parent = parent || document.body;

    let t = parent.getElementsByTagName( 'table' ),
        i = t.length;

    while ( --i >= 0 ) makeSortable( t[ i ] );
}

//Toggle feature
function showhide( col, elem ) {
    const tds = document.getElementsByTagName( 'tr' );

    elem.checked ? dp = "table-cell" : dp = "none";

    for ( i = 0; i < tds.length; i++ ){
        tds[ i ].childNodes[ col ].style.display = dp;
    }
}

window.onload = () => makeAllSortable();

