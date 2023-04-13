import useTranslation from "next-translate/useTranslation";
import { useCallback, useState, useEffect } from "react";
import SpinnerComponent from "./utils/Spinner";
import { apiFunction } from "@/utils/apiHelper";

export default function ResponseComponent({requestText}) {
    const { t, lang } = useTranslation('common');
    const [responseText, setResponseText] = useState(requestText);
    const [responseData, setResponseData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isReset, setIsReset] = useState(false);
    
    const fetchApi = useCallback(async () => {
        if (responseText === '') {
            return;
        } else {
            setIsLoading(true);
            setIsReset(false);

            try {
                const data = await apiFunction(responseText);
                setResponseData(data);
                setResponseText('');
            } catch (error) {
                console.log(error);
                // throw error;
            }
        }

        setIsLoading(false);
    }, [responseText]);

    function resetOnClick() {
        setIsReset(true);
    }

    useEffect(() => {
        fetchApi();
    });

    return (
        <div>
            {
                isReset && (
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
                        <div>
                            {
                                isLoading
                                    ? <SpinnerComponent />
                                    : responseData !== ''
                                        ? (
                                            <textarea
                                                className="form-control my-2"
                                                id="response-text-area"
                                                rows={process.env.REQUEST_INPUT_PLACEHOLDER_ROW_NUM || 8}
                                                placeholder={t('placeholder-try-something')}
                                                value={responseData.choices[0].message.content}
                                                disabled
                                            ></textarea>
                                        )
                                        : (
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