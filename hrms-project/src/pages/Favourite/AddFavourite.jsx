import React from 'react'
import { Button} from "semantic-ui-react";


function AddFavourite({data,jobId, onClick}) {
    const job = data.find(j => j.jobAdvertisement.id === jobId)
    return (
      <div  >
  
     {job && <Button icon="star" onClick={
        (e) => {
            !job ? onClick({
                "candidateId": 1,
                "jobAdvertisementId": jobId
              }):onClick({
                "candidateId": 1,
                "jobAdvertisementId": jobId
              },true)
        }

    } type="submit" color="yellow"/> }
     {!job && <Button icon="star" onClick={
        (e) => {
            !job ? onClick({
                "candidateId": 1,
                "jobAdvertisementId": jobId
              }):onClick({
                "candidateId": 1,
                "jobAdvertisementId": jobId
              },true)
        }

    } type="submit"  color="grey"/> }
    </div>
    )
}

export default AddFavourite