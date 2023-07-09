import useTranslation from "next-translate/useTranslation";
import { useCallback, useState, useEffect } from "react";
import SpinnerComponent from "./utils/Spinner";
import { apiFunction } from "@/utils/apiHelper";
import Image from "next/image";

export default function ImageResponseComponent({requestText}) {
    const { t, lang } = useTranslation('common');
    const [parameters, setParameters] = useState(null);

    const [responseText, setResponseText] = useState(requestText);
    const [responseData, setResponseData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isReset, setIsReset] = useState(false);
    
    const fetchApi = useCallback(async () => {
        if (responseText === '') {
            return;
        }

        const regex = new RegExp(process.env.REGEX_IMAGE_GENERATE, "i");

        if (responseText !== '' && regex.test(responseText)) {
            setResponseData({
                data: [
                    {
                        url: 
                    }
                ]
            }
            )
        } 
        // else {
        //     setIsLoading(true);
        //     setIsReset(false);

        //     const responseType = 'image';

        //     try {
        //         const data = await apiFunction(responseText, responseType);
        //         setResponseData(data);
        //         setResponseText('');
        //     } catch (error) {
        //         // console.log(error);
        //         // throw error;
        //     }
        // }

        setIsLoading(false);
    }, [responseText]);

    // console.log(responseData.data);

    function resetOnClick() {
        setIsReset(true);
    }

    useEffect(() => {
        fetchApi();
    });

    if (!parameters) {
        return <SpinnerComponent />
    }

    return (
        <div>
            {
                !isReset && (
                    <>
                        <div className="d-flex justify-content-between">
                            <h4> {t('text-response')} </h4>
                            <button
                                className="btn btn-secondary"
                                onClick={resetOnClick}
                            >
                                {t('text-reset')}
                            </button>
                        </div>
                        <div className="container row my-5">
                            {
                                isLoading
                                    ? <SpinnerComponent />
                                    : responseData?.data?.length > 0 ? (
                                            responseData.data.map((item, index) => (
                                                <div className="col-6 p-3" key={index}>
                                                    <Image
                                                        src={item.url}
                                                        width={1024}
                                                        height={1024}
                                                        className="img-fluid rounded"
                                                        alt="image"
                                                        lazy
                                                    />
                                                </div>
                                            ))
                                        ) : (
                                            <p> {t('try-again')} </p>
                                        )
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

// responseData.data.map((item, index) => {
//     return (
//         <div className="col-6" key={index}>
//             <Image
//                 key={index}
//                 src={item.url}
//                 width={100}
//                 height={100}
//                 alt="image"
//             />
//         </div>
//     )
// })