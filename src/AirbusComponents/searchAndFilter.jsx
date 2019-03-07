import React, { Component } from "react";
class SearchAndFilter extends Component {
  state = {};
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <input type="text" id="search_msn" className="form-control" />
            </td>
            <td>
              <input type="text" id="search_fn" className="form-control" />
            </td>
            <td>
              <button
                onClick={() =>
                  this.props.search(
                    document.getElementById("search_msn").nodeValue,
                    document.getElementById("search_fn").nodeValue
                  )
                }
                className="btn btn-light"
              >
                Apply Filter
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default SearchAndFilter;
