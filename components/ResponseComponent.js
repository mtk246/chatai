import useTranslation from "next-translate/useTranslation";
import { useCallback, useState, useEffect } from "react";
import SpinnerComponent from "./utils/Spinner";
import { apiFunction } from "@/utils/apiHelper";

export default function ResponseComponent({requestText}) {
    const { t, lang } = useTranslation('common');
    const [responseText, setResponseText] = useState(requestText);
    const [responseData, setResponseData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const fetchApi = useCallback(async () => {
        if (responseText === '') {
            return;
        } else {
            setIsLoading(true);

            try {
                const data = await apiFunction(responseText);
                setResponseData(data);
                setResponseText('');
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }

        setIsLoading(false);
        console.log(isLoading);
    }, [responseText]);

    useEffect(() => {
        fetchApi();
    });

    return (
        <div>
            <p>
                Response text -
            </p>
            <div>
                {
                    isLoading
                        ? <SpinnerComponent />
                        : responseData !== ''
                            ? (
                                <textarea
                                    className="form-control my-2"
                                    id="requestTextArea"
                                    rows={process.env.REQUEST_INPUT_PLACEHOLDER_ROW_NUM || 8}
                                    placeholder={t('placeholder-try-something')}
                                    value={responseData.choices[0].message.content}
                                    disabled
                                ></textarea>
                            )
                            : (
                                <p> Please try again! </p>
                            )
                }
            </div>
        </div>
    )
}