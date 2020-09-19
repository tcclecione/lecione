import controller from "../../helpers/compose-controller";
import { Feedbacks } from "../../models";

class FeedbacksApiController {
  static async list(req, res) {
    let data = await Responsibles.query();

    if (!data) {
      return res.status(404).json({
        message: "Nenhum estudante cadastrado."
      });
    }

    return res.status(200).responseComposer({ data });
  }

  static async listByStudent(req, res) {
    let feedbacks = await Feedbacks.query()
      .select(
        "feedbacks.id as id",
        "employees.id as employee_id",
        "employees.name as employee_name",
        "employees.image as employee_image",
        "feedbacks.description as feedback_description",
        "feedbacks.created_at",
        "office_employee.name as office_employee",
        "feedback_type.name as feedback_type",
        "feedback_type.icon as feedback_icon",
        "feedback_type.color as feedback_color"
      )
      .innerJoin("employees", "feedbacks.employee_id", "employees.id")
      .innerJoin("office_employee", "employees.office_id", "office_employee.id")
      .innerJoin(
        "feedback_type",
        "feedbacks.feedback_type_id",
        "feedback_type.id"
      )
      .where("feedbacks.student_id", req.query.id);

    if (!feedbacks) {
      return res.status(404).json({
        message: "Nenhum feedback cadastrado para este estudante."
      });
    }

    return res.status(200).responseComposer(feedbacks);
  }
}

export default controller(FeedbacksApiController);
