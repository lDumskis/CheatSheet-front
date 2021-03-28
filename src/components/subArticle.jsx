import react, {useState} from "react";
import "./submit.css"


const SubArticle = () => {

    const [text, setText] = useState('');
    return(
        
    <div className='ms-3 ps-5 pe-5' id="submissionForm">
    <h2 className="card-title text-center display-5 pageTitle"><strong>Create an Article</strong></h2>
    <div className="row">
    <div className="col-9">
    <input placeholder="Title" id="articleTitle" className="form-control titleField" />
    <textarea id="subArticle" type="text" className="form-control articleBody mt-2" placeholder="Add as many details as you can." />
    </div>
    <div className="col-3 d-flex flex-column justify-content-between">
    <div>
        <div className="input-group mb-1">
        
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" id="searchButton" aria-expanded="false">
      </button>
      <ul class="dropdown-menu" id="tagChoice" >
          <li><a class="dropdown-item" href="#">found tags here</a></li>
      </ul>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="e.g. syndication"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        //need to search available tags by this field onChange => filter and add to list tagChoice.
        //If value length > 1 show tagChoices
      />
    </div>
    </div>
    <div className="mt-auto "><input id="RequesterEmail" className="userEmail" placeholder=" Your email *"></input></div>
    </div>
    <div className="col-3 mt-2">
    <div className="input-group pasteFields">
        <span className="input-group-text pastePlusSection" id="confCopy">+</span><input type="text" className="pasteField form-control" placeholder="Link a confluence article" aria-label="confluenceCopyField" aria-describedby="confCopy"/>
    </div>
    <div className="input-group pasteFields mt-2 ">
    <span className="input-group-text pastePlusSection" id="kbCopy">+</span><input type="text" className="pasteField col-3 form-control" placeholder="Link a knowledgebase article" aria-label="kbCopyField" aria-describedby="kbCopy"></input>
    </div>
    </div>
    <div className="row d-flex justify-content-end mt-2 ">
        <button id="submit" className="btn btn-success col-3">Submit</button>
    </div>
    </div>
    
</div>    
    );
}


export default SubArticle;
