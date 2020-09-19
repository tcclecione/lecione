import controller from "../../helpers/compose-controller";
import { Timeline } from "../../models";

class TimelineApiController {
  static async list(req, res) {
    let list = await Timeline.query()
      .select(
        "timeline.id",
        "timeline.post",
        "employees.name",
        "employees.image",
        "office_employee.name as office_employee",
        "timeline.classroom_id",
        "timeline.created_at",
        "timeline.updated_at"
      )
      .join("employees", "employees.id", "timeline.employee_id")
      .join("office_employee", "office_employee.id", "employees.office_id")
      .where("timeline.school_id", req.params.id);

    if (!list || !list.length) {
      return res.status(404).json({
        message: "Nenhum registro cadastrado."
      });
    }

    return res.status(200).responseComposer(list);
  }
}

export default controller(TimelineApiController);
