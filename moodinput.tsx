import{Input} from "@/components/ui/input"
import{Button} from "@/components/ui/button"

type props={
  mood:string;
  setMood:(val:string)=> void,
  onGenerate:()=> void,
  disabled:boolean
}

const moodinput = ({mood,setMood,onGenerate,disabled}:props) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="Text here..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
        />
        <Button className="w-full" onClick={onGenerate} disabled ={disabled}>
          Generate Email Template
        </Button>
    </div>
  )
}

export default moodinput
