import React from "react";

export type StringInfo = {
  text: string;
  reliability: number;
};

type labeledText = {
  labeledText: StringInfo | undefined;
};

/**
 *
 * @param 라벨링된 결과값
 */
const LabeledText = ({ labeledText }: labeledText) => {
  return (
    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
      {labeledText && (
        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
          <div className="w-0 flex-1 flex items-center">
            <span className="ml-2 flex-1 w-0 truncate">{labeledText.text}</span>
          </div>
          <div className="ml-4 flex-shrink-0 font-medium text-mainBlue hover:text-indigo-500">
            {(labeledText.reliability * 100).toFixed(1)}%
          </div>
        </li>
      )}
    </ul>
  );
};

export default LabeledText;
