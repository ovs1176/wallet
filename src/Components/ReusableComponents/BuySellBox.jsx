import DollerImage from "./DollerImage"




const BuySellBox = ({ imagePath, text, classNames ,bgcolor }) => {



  return (
    <div className={`${bgcolor} col-5  coin-col   pt-3`}>


      <DollerImage imagePath={imagePath} classNames={classNames} />


      <p className="text-center ">
        {text}
      </p>

    </div>
  )
}

export default BuySellBox