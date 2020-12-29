import {Helmet} from "react-helmet";

function MetaTag(args){
    const title = ("title" in args)?args["title"]:"SoulSion";
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
}

export default MetaTag;