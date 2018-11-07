import { NodeTemplate } from "l3p-core"
import { Observable } from "l3p-core"
import "../../base-node.style.scss"

export default class AnnoTaskRunningView {
    constructor(model) {
        this.html = new NodeTemplate(`            
            <div class="panel panel-primary custom_node" data-toggle="tooltip" data-placement="right" title="<h4>Instruction</h4><p>${model.annoTask.instructions}<p>">
                <div class="panel-heading ">
                    <i class="fa fa-pencil fa-2x pull-left" aria-hidden="true"></i>
                    <h class="panel-title">Annotation Task</h>
                </div>
                <div class="panel-body">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>${model.annoTask.name}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="progress progessbar-nodes">
                        <div data-ref="progress-bar" class="progress-bar" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100"
                            style="width:${model.progress.value }%">
                            <p data-ref="progress-bar-text" class="color-black">${model.progress.value ?model.progress.value: 0}%
                                <p>
                        </div>
                    </div>
                </div>
                <div data-ref="state" class="panel-footer 
                            ${ model.state.value == " script_error"   ? "bg-red "      : " " }
                                    ${ model.state.value == "pending"        ? "bg-blue "     : " " }
                                    ${ model.state.value == "in_progress"    ? "bg-orange "   : " " }
                                    ${ model.state.value == "finished"       ? "bg-green "    : " " } 
                                    ">
                    <p2 data-ref="state-text" class="color-white footer-text">${model.state.value.replace("_", " ")}</p2>
                </div>
            </div>`)
        // The parent node gets defined after adding the node to
        // the graph by the nodes presenter.
        // all view events will be delegated to the parent node.
        this.parentNode = undefined
    }
    
    setName(name: String){
        //$(this.parentNode).find("[data-ref='name']").text(name)
    }
}

