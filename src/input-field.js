import React, { useEffect, useState } from 'react';
import Records from './input-form.json';

const RECORDS_AND_LABEL_OBJ = Records.fields.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.label.toString().toLocaleLowerCase()]: curr._uid,
  }),
  {}
);

function Check() {
  const [normalState, setNormalState] = useState(() =>
    Records.fields.reduce((acc, curr) => ({ ...acc, [curr._uid]: 0 }), {})
  );
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const tempVolume = Object.values(normalState).reduce(
      (acc, curr) => acc * curr
    );
    setVolume(tempVolume);
  }, [normalState]);
  console.log(normalState);
  return (
    <div className="check">
      {Records.fields &&
        Records.fields.map((record) => {
          return (
            <div className="check" key={record._uid}>
              <label>{record.label}</label>
              <input
                type={record.number}
                value={normalState[record._uid]}
                onChange={(e) =>
                  setNormalState({
                    ...normalState,
                    [record._uid]: e.target.value,
                  })
                }
              />
              <label>{record.unit}</label>
              <br />
              <br />
            </div>
          );
        })}
      <div className="first-view">
        <div
          style={{
            height: `${normalState[RECORDS_AND_LABEL_OBJ['height']]}rem`,
            width: `${normalState[RECORDS_AND_LABEL_OBJ['width']]}rem`,
            border: '1px solid red',
            position: 'relative',
            marginLeft: '1rem',
          }}
        >
          <div
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              position: 'absolute',
              left: '-20px',
            }}
          >
            Height: {normalState[RECORDS_AND_LABEL_OBJ['height']]}m
          </div>
          <div
            style={{
              position: 'absolute',
              top: `${
                parseInt(normalState[RECORDS_AND_LABEL_OBJ['height']]) + 0.5
              }rem`,
            }}
          >
            Width: {normalState[RECORDS_AND_LABEL_OBJ['width']]}m
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="second-view">
        <div
          style={{
            height: `${normalState[RECORDS_AND_LABEL_OBJ['length']]}rem`,
            width: `${normalState[RECORDS_AND_LABEL_OBJ['width']]}rem`,
            border: '1px solid red',
            position: 'relative',
            marginLeft: '1rem',
          }}
        >
          <div
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              position: 'absolute',
              left: '-20px',
            }}
          >
            Length: {normalState[RECORDS_AND_LABEL_OBJ['length']]}m
          </div>
          <div
            style={{
              position: 'absolute',
              top: `${
                parseInt(normalState[RECORDS_AND_LABEL_OBJ['height']]) + 0.5
              }rem`,
            }}
          >
            Width: {normalState[RECORDS_AND_LABEL_OBJ['width']]}m
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div>
        <label>Volume</label>
        <input disabled value={volume} />
      </div>
    </div>
  );
}

export default Check;
