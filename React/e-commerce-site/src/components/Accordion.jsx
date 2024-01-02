import { faCaretRight, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Accordion(props) {
    return (
        <div className="flex flex-col cursor-pointer">
            <div className="flex border-b-[1px] items-center px-4 pb-4" onClick={props.toggleAccordion}>
                <div className="w-full text-left inline font-semibold">
                    {props.title}
                </div>
                {props.isOpen ? (<FontAwesomeIcon icon={faCaretUp} size="sm" style={{ color: "#000000", }} />) : (<FontAwesomeIcon icon={faCaretRight} size="sm" style={{ color: "#000000", }} />)}
            </div>
            <div className={`p-4 bg-white ${props.isOpen ? '' : 'hidden'}`}>
                <div>
                    {props.data}
                </div>
            </div>
        </div>
    );
}; 
