import WizardTabView from "wizard/WizardTabView"
import * as d3 from "d3"
import "./graph.scss"
let containerHeight = 500
class TabTreeView extends WizardTabView {
    constructor(model){
        // the config object can be declared outside
        // of the class or directly into the super call aswell.
        super({
            title: " ",
            icon: "fa fa-tag fa-1x",
            content: `<div class="container-fluid">
    <div class="row">
        <div data-ref="table-container"   class="col-sm-3 table-container-tab4">
            <p data-ref="instruction" class="instruction-text-tab4"> To add a lable, hold ctrl and click on a label in graph </p>        
        
            <table style="width:100%" data-ref="label-datatable" class="table table-striped table-bordered">
            <thead>
            <tr>
                <th>id</th>
                <th>Label</th>
                <th>Max Label</th>
                <th></th>
            </tr>
            </thead>
            </table>
        </div>
        <div data-ref="tree-container"   id="tree-container" class="col-sm-9 tree-container-tab4">

        </div>
    </div>
</div>`,
        })        
        
    }
}

export default TabTreeView