import React, { Component } from "react";

class Flight extends Component {
  state = {};
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span className="label label-default m-3">MSN:</span>
              </td>
              <td>
                <input type="text" id="ms" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">Harness Length:</span>
              </td>
              <td>
                <input type="email" id="hl" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">Gross Weight:</span>
              </td>
              <td>
                {" "}
                <input type="text" id="gw" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">
                  Atmospheric Pressure:
                </span>
              </td>
              <td>
                {" "}
                <input type="text" id="ap" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">
                  Room Temperature:
                </span>
              </td>
              <td>
                <input type="text" id="rt" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">Airport:</span>
              </td>
              <td>
                <input type="text" id="airport" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">
                  Fuel Capacity on left wing:
                </span>
              </td>
              <td>
                <input type="text" id="cl" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">
                  Fuel Capacity on left wing
                </span>
              </td>
              <td>
                <input type="text" id="cr" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">
                  Fuel Quantity on left wing
                </span>
              </td>
              <td>
                <input type="text" id="ql" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">
                  Fuel Quantity on right wing
                </span>
              </td>
              <td>
                <input type="text" id="qr" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">
                  Maximum Altitude to be reached
                </span>
              </td>
              <td>
                <input type="text" id="ma" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="label label-default m-3">Flight Number</span>
              </td>
              <td>
                <input type="text" id="fn" className="form-control" />
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <button onClick={this.props.onSave} className="btn btn-dark">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Flight;
